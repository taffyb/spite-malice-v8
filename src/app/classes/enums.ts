export enum PlayerTypesEnum{
    BASE,
    DETERMINISTIC,
    REC_DETERMINISTIC
}
export enum PositionsEnum{
    NO_POS=-1,
    PLAYER_PILE=0,
    PLAYER_HAND_1,
    PLAYER_HAND_2,
    PLAYER_HAND_3,
    PLAYER_HAND_4,
    PLAYER_HAND_5,
    PLAYER_STACK_1,
    PLAYER_STACK_2,
    PLAYER_STACK_3,
    PLAYER_STACK_4,
    STACK_1=20,
    STACK_2,
    STACK_3,
    STACK_4,
    DECK,
    RECYCLE
}
export enum TabsEnum{
    DEFAULT=0,
    DASHBOARD=0,
    PLAY_AREA=1
}
export enum SuitsEnum{
    SPADES=0,
    HEARTS=13,
    CLUBS=26,
    DIAMONDS=39
}
export enum CardsEnum{
    NO_CARD=0,
    ACE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK,
    QUEEN,
    KING,
    DECK=52,
    JOKER=53
}
export enum TurnEnum{
    PLAYER=0,
    DEALER,
    RECYCLE,
    PLAYER_SWITCH
}