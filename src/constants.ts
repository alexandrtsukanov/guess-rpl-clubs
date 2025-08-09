export const ALL_CLUBS = [
    'АКРОН',
    'АЛАНИЯ',
    'АМКАР',
    'АНЖИ',
    'АРСЕНАЛ',
    'АСМАРАЛ',
    'АХМАТ',
    'БАЛТИКА',
    'ВОЛГА',
    'ДИНАМО',
    'ЕНИСЕЙ',
    'ЖЕМЧУЖИНА',
    'ЗЕНИТ',
    'КАМАЗ',
    'КРАСНОДАР',
    'КРЫЛЬЯ СОВЕТОВ',
    'КУБАНЬ',
    'ЛАДА',
    'ЛОКОМОТИВ',
    'ЛУЧ',
    'МОРДОВИЯ',
    'МОСКВА',
    'ОКЕАН',
    'ОРЕНБУРГ',
    'ПАРИ НН',
    'РОСТОВ',
    'РОТОР',
    'РУБИН',
    'САТУРН',
    'СИБИРЬ',
    'СКА',
    'СОКОЛ',
    'СОЧИ',
    'СПАРТАК',
    'ТАМБОВ',
    'ТЕКСТИЛЬЩИК',
    'ТОМЬ',
    'ТОРПЕДО',
    'ТОСНО',
    'ТЮМЕНЬ',
    'УРАЛ',
    'УРАЛАН',
    'УФА',
    'ФАКЕЛ',
    'ХИМКИ',
    'ЦСКА',
    'ЧЕРНОМОРЕЦ',
    'ШИННИК',
] as const;

export type TClub = typeof ALL_CLUBS[number];

export const clubsAmount = ALL_CLUBS.length;
export const lettersAmount = 25;
export const rowLen = 7;
export const spacePosition = 23;
export const abcStart = 1040;
export const abcEnd = 1072;

export const divider = '-';
export const space = ' ';
export const cross = 'x';
