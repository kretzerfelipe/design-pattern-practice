interface Item {
  id: number;
  volume: number;
}

export function question01(capacity: number, items: Item[]) {
  const orderedItems = items.sort((a, b) => b.volume - a.volume);

  const result: Item[] = [];
  let totalVolume = 0;

  orderedItems.forEach((item) => {
    if (totalVolume + item.volume <= capacity) {
      result.push(item);
      totalVolume += item.volume;
    }
  });

  return { result, totalVolume };
}

interface Place {
  name: string;
  value: number;
  time: number;
}

// detalhe desse cara, considerando que o tenho a var timeAvailablePerDay, se o lugar pedir 10 horas para ser visitado mas ele so tem
// 8 por dia, ele vai ser visitado, não há validação para isso, eu fiz assim para que ele possa "quebrar" a visita em mais de um dia, tmjk
export function question02(
  daysAvailable: number,
  places: Place[],
  timeAvailablePerDay: number, // fiz esse atributo para que seja mais realista ao calcular as horas que o cara pode vbisitar
): { trip: Place[]; totalPoints: number; daysUsed: number } {
  const orderedPlaces = [...places].sort((a, b) => {
    const aFinalValue = a.value / a.time;
    const bFinalValue = b.value / b.time;

    return bFinalValue - aFinalValue;
  });

  const trip: Place[] = [];
  let totalPoints = 0;
  let totalHours = 0;

  orderedPlaces.forEach((place) => {
    if (totalHours + place.time <= timeAvailablePerDay * daysAvailable) {
      trip.push(place);
      totalPoints += place.value;
      totalHours += place.time;
    }
  });

  return {
    trip,
    totalPoints,
    daysUsed: Math.ceil(totalHours / timeAvailablePerDay),
  };
}
type RadioStation = {
  name: string;
  coverage: string[];
};

export function question03(
  targetStates: string[],
  availableStations: RadioStation[],
) {
  const selectedStations: RadioStation[] = [];

  let remainingStates = [...targetStates];

  while (remainingStates.length > 0) {
    let bestStation: RadioStation | null = null;
    let statesCoveredThisRound: string[] = [];

    availableStations.forEach((station) => {
      const usefulCoverage = station.coverage.filter((state) =>
        remainingStates.includes(state),
      );

      if (usefulCoverage.length > statesCoveredThisRound.length) {
        bestStation = station;
        statesCoveredThisRound = usefulCoverage;
      }
    });

    if (!bestStation) {
      console.log(
        "nao conseguimos cobrir todos os estaados com as estações disponíveis",
      );
      break;
    }

    selectedStations.push(bestStation);

    remainingStates = remainingStates.filter(
      (state) => !statesCoveredThisRound.includes(state),
    );
  }

  return selectedStations;
}
