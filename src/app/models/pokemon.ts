import { Stat } from "./stat";

export class Pokemon {
    id: number;
    name: string;
    type1: string;
    type2?: string;
    srpite: string;
    height: number;
    weight: number;
    abilities: string[];
    hiddenAbility: string;
    stats: Stat[];
    sprite: any;
}