import CoreCombatLogParser from 'parser/core/CombatLogParser';
import ArcaneTorrent from 'parser/shared/modules/racials/bloodelf/ArcaneTorrent';

import FlamestrikeNormalizer from './normalizers/Flamestrike';
import CombustionNormalizer from './normalizers/Combustion';
import Scorch from './normalizers/Scorch';
import PyroclasmBuff from './normalizers/PyroclasmBuff';

import Checklist from './modules/Checklist/Module';
import Buffs from './modules/features/Buffs';

import AlwaysBeCasting from './modules/features/AlwaysBeCasting';
import Abilities from './modules/features/Abilities';
import CooldownThroughputTracker from './modules/features/CooldownThroughputTracker';
import CancelledCasts from '../shared/modules/features/CancelledCasts';

import MirrorImage from '../shared/modules/features/MirrorImage';
import ArcaneIntellect from '../shared/modules/features/ArcaneIntellect';
import RuneOfPower from '../shared/modules/features/RuneOfPower';
import ElementalBarrier from '../shared/modules/features/ElementalBarrier';

import HotStreak from './modules/features/HotStreak';
import HotStreakPreCasts from './modules/features/HotStreakPreCasts';
import HotStreakWastedCrits from './modules/features/HotStreakWastedCrits';
import CombustionFirestarter from './modules/features/CombustionFirestarter';
import CombustionCharges from './modules/features/CombustionCharges';
import CombustionSpellUsage from './modules/features/CombustionSpellUsage';
import HeatingUp from './modules/features/HeatingUp';
import Pyroclasm from './modules/features/Pyroclasm';

//Talents
import SearingTouch from './modules/talents/SearingTouch';
import Meteor from './modules/talents/Meteor';
import MeteorRune from './modules/talents/MeteorRune';
import MeteorCombustion from './modules/talents/MeteorCombustion';
import Kindling from './modules/talents/Kindling';

//Legendaries
import FeveredIncantation from './modules/items/FeveredIncantation';

//Conduits
import MasterFlame from './modules/items/MasterFlame';
import ControlledDestruction from './modules/items/ControlledDestruction';
import InfernalCascade from './modules/items/InfernalCascade';
import DivertedEnergy from '../shared/modules/items/DivertedEnergy';
import GroundingSurge from '../shared/modules/items/GroundingSurge';
import IreOfTheAscended from '../shared/modules/items/IreOfTheAscended';
import TempestBarrier from '../shared/modules/items/TempestBarrier';
import SiphonedMalice from '../shared/modules/items/SiphonedMalice';
import FromTheAshes from './modules/talents/FromTheAshes';

class CombatLogParser extends CoreCombatLogParser {
  static specModules = {
    //Normalizers
    FlameStrikeNormalizer: FlamestrikeNormalizer,
    scorch: Scorch,
    pyroclasmBuff: PyroclasmBuff,
    combustionNormalizer: CombustionNormalizer,

    //Checklist
    checklist: Checklist,
    buffs: Buffs,

    // Features
    alwaysBeCasting: AlwaysBeCasting,
    abilities: Abilities,
    cooldownThroughputTracker: CooldownThroughputTracker,
    cancelledCasts: CancelledCasts,
    hotStreak: HotStreak,
    hotStreakPreCasts: HotStreakPreCasts,
    hotStreakWastedCrits: HotStreakWastedCrits,
    combustionFirestarter: CombustionFirestarter,
    combustionCharges: CombustionCharges,
    combustionSpellUsage: CombustionSpellUsage,
    heatingUp: HeatingUp,
    mirrorImage: MirrorImage,
    elementalBarrier: ElementalBarrier,

    // Talents
    arcaneIntellect: ArcaneIntellect,
    runeOfPower: [RuneOfPower, { showStatistic: false, showSuggestion: false }] as const,
    kindling: Kindling,
    meteor: Meteor,
    meteorRune: MeteorRune,
    meteorCombustion: MeteorCombustion,
    pyroclasm: Pyroclasm,
    searingTouch: SearingTouch,
    fromTheAshes: FromTheAshes,

    //Legendaries
    feveredIncantation: FeveredIncantation,

    //Conduits
    masterFlame: MasterFlame,
    controlledDestruction: ControlledDestruction,
    infernalCascade: InfernalCascade,
    divertedEnergy: DivertedEnergy,
    groundingSurge: GroundingSurge,
    ireOfTheAscended: IreOfTheAscended,
    tempestBarrier: TempestBarrier,
    siphonedMalice: SiphonedMalice,

    // There's no throughput benefit from casting Arcane Torrent on cooldown
    arcaneTorrent: [ArcaneTorrent, { castEfficiency: null }] as const,
  };
}

export default CombatLogParser;
