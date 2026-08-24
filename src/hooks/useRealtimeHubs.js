import { useEffect, useMemo, useState } from 'react';
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

const normalizeHub = (hub) => ({
  ...hub,
  coordinates: Array.isArray(hub.coordinates)
    ? hub.coordinates
    : [Number(hub.latitude), Number(hub.longitude)],
});

/**
 * Uses the locally curated hub network until the Supabase `hubs` table is
 * configured. When enabled, public changes to that table update the globe
 * without a redeploy.
 */
export function useRealtimeHubs(fallbackHubs) {
  const [hubs, setHubs] = useState(fallbackHubs);
  const [source, setSource] = useState('local');

  useEffect(() => {
    setHubs(fallbackHubs);

    if (!isSupabaseConfigured || !supabase) return undefined;

    let active = true;
    const loadHubs = async () => {
      const { data, error } = await supabase
        .from('hubs')
        .select('id, name, location, latitude, longitude, type, region, contact_email, phone, address, website, key_contact, specializations, partnership_priority, strategic_value, description, facilities')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });

      if (!active || error || !data?.length) return;

      setHubs(data.map((hub) => normalizeHub({
        ...hub,
        contactEmail: hub.contact_email,
        keyContact: hub.key_contact,
        partnershipPriority: hub.partnership_priority,
        strategicValue: hub.strategic_value,
      })));
      setSource('realtime');
    };

    loadHubs();

    const channel = supabase
      .channel('tawasol-hubs-live')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'hubs' }, loadHubs)
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, [fallbackHubs]);

  return useMemo(() => ({ hubs, source }), [hubs, source]);
}
