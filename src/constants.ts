export const ALL_CLUBS = [
    'Акрон',
    'Алания',
    'Амкар',
    'Анжи',
    'Арсенал',
    'Асмарал',
    'Ахмат',
    'Балтика',
    'Волга',
    'Динамо-Махачкала',
    'Динамо-Москва',
    'Динамо-Ставрополь',
    'Енисей',
    'Жемчужина',
    'Зенит',
    'Камаз',
    'Краснодар',
    'Крылья Советов',
    'Кубань',
    'Лада',
    'Локомотив',
    'Локомотив-Нижний Новгород',
    'Луч',
    'Мордовия',
    'Москва',
    'Океан',
    'Оренбург',
    'Пари НН',
    'Ростов',
    'Ротор',
    'Рубин',
    'Сатурн',
    'Сибирь',
    'СКА',
    'Сокол',
    'Сочи',
    'Спартак-Москва',
    'Спартак-Нальчик',
    'Тамбов',
    'Текстильщик',
    'Томь',
    'Торпедо',
    'Тосно',
    'Тюмень',
    'Урал',
    'Уралан',
    'Уфа',
    'Факел',
    'Химки',
    'ЦСКА',
    'Черноморец',
    'Шинник',
] as const;

export type TClub = typeof ALL_CLUBS[number];

export const clubs = new Set<string>(ALL_CLUBS);
export const guessed = new Set<string>();
export const clubsToGuess = new Set<TClub>(ALL_CLUBS);

export const clubsAmount = ALL_CLUBS.length;
export const lettersAmount = 25;

export const divider = '-';