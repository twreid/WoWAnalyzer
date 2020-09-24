import Analyzer from 'parser/core/Analyzer';
import SPELLS from 'common/SPELLS';
import { STATISTIC_ORDER } from 'interface/others/TalentStatisticBox';
import React from 'react';
import HolyWordSanctify from 'parser/priest/holy/modules/spells/holyword/HolyWordSanctify';
import HolyWordChastise from 'parser/priest/holy/modules/spells/holyword/HolyWordChastise';
import HolyWordSerenity from 'parser/priest/holy/modules/spells/holyword/HolyWordSerenity';
import Statistic from 'interface/statistics/Statistic';

// Example Log: /report/Gvxt7CgLya2W1TYj/5-Normal+Zek'voz+-+Kill+(3:57)/13-弥砂丶
class LightOfTheNaaru extends Analyzer {
  static dependencies = {
    sanctify: HolyWordSanctify,
    serenity: HolyWordSerenity,
    chastise: HolyWordChastise,
  };
  protected sanctify!: HolyWordSanctify;
  protected serenity!: HolyWordSerenity;
  protected chastise!: HolyWordChastise;

  constructor(options: any) {
    super(options);
    this.active = this.selectedCombatant.hasTalent(SPELLS.LIGHT_OF_THE_NAARU_TALENT.id);
  }

  statistic() {
    return (
      <Statistic
        talent={SPELLS.LIGHT_OF_THE_NAARU_TALENT.id}
        value={`${Math.ceil((this.sanctify.lightOfTheNaaruCooldownReduction + this.serenity.lightOfTheNaaruCooldownReduction + this.chastise.lightOfTheNaaruCooldownReduction) / 1000)}s Cooldown Reduction`}
        tooltip={(
          <>
            Serenity: {Math.ceil(this.serenity.lightOfTheNaaruCooldownReduction / 1000)}s CDR<br />
            Sanctify: {Math.ceil(this.sanctify.lightOfTheNaaruCooldownReduction / 1000)}s CDR<br />
            Chastise: {Math.ceil(this.chastise.lightOfTheNaaruCooldownReduction / 1000)}s CDR
          </>
        )}
        position={STATISTIC_ORDER.CORE(7)}
      />

    );
  }
}

export default LightOfTheNaaru;
