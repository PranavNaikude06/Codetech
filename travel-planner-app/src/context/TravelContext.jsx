import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TravelContext = createContext();

export function TravelProvider({ children }) {
  const [trips, setTrips] = useLocalStorage('codetech_trips', [
    // Pre-populate with one template trip so it's not totally empty on first launch
    {
      id: 'template-trip-1',
      title: 'Summer Getaway in Paris',
      startDate: '2026-07-15',
      endDate: '2026-07-22',
      budget: 3500,
      notes: 'Our first trip of the year! Excited to visit museums and cafes.',
      color: 'teal',
      emoji: '✈️',
      destinations: [
        { id: 'd-1', name: 'Eiffel Tower Tour', date: '2026-07-16T15:00', notes: 'Booked sunset ticket' },
        { id: 'd-2', name: 'Louvre Museum', date: '2026-07-18T09:00', notes: 'Go early to avoid crowds' }
      ],
      expenses: [
        { id: 'e-1', description: 'Flight Tickets', amount: 1200, category: 'Transport', date: '2026-07-15' },
        { id: 'e-2', description: 'Boutique Hotel Montmartre', amount: 950, category: 'Accommodation', date: '2026-07-15' },
        { id: 'e-3', description: 'Seine River Cruise Dinner', amount: 240, category: 'Activities', date: '2026-07-16' }
      ],
      packingList: [
        { id: 'p-1', name: 'Passport & Documents', category: 'Documents', packed: true },
        { id: 'p-2', name: 'Universal Travel Adapter', category: 'Electronics', packed: true },
        { id: 'p-3', name: 'Comfortable Walking Shoes', category: 'Clothing', packed: false },
        { id: 'p-4', name: 'French Phrase Book', category: 'Miscellaneous', packed: false }
      ]
    }
  ]);
  const [theme, setTheme] = useLocalStorage('codetech_theme', 'dark');

  // Sync theme with document element attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // TRIP CRUD OPERATIONS
  const addTrip = (trip) => {
    const newTrip = {
      id: Date.now().toString(),
      title: 'New Unnamed Trip',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
      budget: 1000,
      notes: '',
      color: 'teal',
      emoji: '✈️',
      destinations: [],
      expenses: [],
      packingList: [],
      ...trip,
    };
    setTrips((prev) => [...prev, newTrip]);
    return newTrip;
  };

  const updateTrip = (tripId, updatedData) => {
    setTrips((prev) =>
      prev.map((t) => (t.id === tripId ? { ...t, ...updatedData } : t))
    );
  };

  const deleteTrip = (tripId) => {
    setTrips((prev) => prev.filter((t) => t.id !== tripId));
  };

  // ITINERARY DESTINATIONS CRUD OPERATIONS
  const addDestination = (tripId, dest) => {
    const newDest = {
      id: Date.now().toString(),
      name: '',
      date: '',
      notes: '',
      ...dest,
    };
    setTrips((prev) =>
      prev.map((t) => {
        if (t.id === tripId) {
          return {
            ...t,
            destinations: [...(t.destinations || []), newDest],
          };
        }
        return t;
      })
    );
  };

  const updateDestination = (tripId, destId, updatedData) => {
    setTrips((prev) =>
      prev.map((t) => {
        if (t.id === tripId) {
          return {
            ...t,
            destinations: (t.destinations || []).map((d) =>
              d.id === destId ? { ...d, ...updatedData } : d
            ),
          };
        }
        return t;
      })
    );
  };

  const deleteDestination = (tripId, destId) => {
    setTrips((prev) =>
      prev.map((t) => {
        if (t.id === tripId) {
          return {
            ...t,
            destinations: (t.destinations || []).filter((d) => d.id !== destId),
          };
        }
        return t;
      })
    );
  };

  // EXPENSES CRUD OPERATIONS
  const addExpense = (tripId, exp) => {
    const newExp = {
      id: Date.now().toString(),
      description: '',
      amount: 0,
      category: 'Other',
      date: new Date().toISOString().split('T')[0],
      ...exp,
    };
    setTrips((prev) =>
      prev.map((t) => {
        if (t.id === tripId) {
          return {
            ...t,
            expenses: [...(t.expenses || []), newExp],
          };
        }
        return t;
      })
    );
  };

  const deleteExpense = (tripId, expId) => {
    setTrips((prev) =>
      prev.map((t) => {
        if (t.id === tripId) {
          return {
            ...t,
            expenses: (t.expenses || []).filter((e) => e.id !== expId),
          };
        }
        return t;
      })
    );
  };

  // PACKING CHECKLIST CRUD OPERATIONS
  const addPackingItem = (tripId, item) => {
    const newItem = {
      id: Date.now().toString(),
      name: '',
      category: 'Miscellaneous',
      packed: false,
      ...item,
    };
    setTrips((prev) =>
      prev.map((t) => {
        if (t.id === tripId) {
          return {
            ...t,
            packingList: [...(t.packingList || []), newItem],
          };
        }
        return t;
      })
    );
  };

  const togglePackingItem = (tripId, itemId) => {
    setTrips((prev) =>
      prev.map((t) => {
        if (t.id === tripId) {
          return {
            ...t,
            packingList: (t.packingList || []).map((i) =>
              i.id === itemId ? { ...i, packed: !i.packed } : i
            ),
          };
        }
        return t;
      })
    );
  };

  const deletePackingItem = (tripId, itemId) => {
    setTrips((prev) =>
      prev.map((t) => {
        if (t.id === tripId) {
          return {
            ...t,
            packingList: (t.packingList || []).filter((i) => i.id !== itemId),
          };
        }
        return t;
      })
    );
  };

  return (
    <TravelContext.Provider
      value={{
        trips,
        theme,
        toggleTheme,
        addTrip,
        updateTrip,
        deleteTrip,
        addDestination,
        updateDestination,
        deleteDestination,
        addExpense,
        deleteExpense,
        addPackingItem,
        togglePackingItem,
        deletePackingItem,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
}

export function useTravel() {
  const context = useContext(TravelContext);
  if (!context) {
    throw new Error('useTravel must be used within a TravelProvider');
  }
  return context;
}
