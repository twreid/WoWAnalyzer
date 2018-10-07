import SPELLS from 'common/SPELLS';
import CoreChanneling from 'parser/core/modules/Channeling';

/**
 * Mind Flay and Void Torrent don't reveal in the combatlog when channeling begins and ends, this fabricates the required events so that ABC can handle it properly.
 */
class Channeling extends CoreChanneling {
  on_byPlayer_cast(event) {
    if (event.ability.guid === SPELLS.VOID_TORRENT_TALENT.id) {
      this.beginChannel(event);
      return;
    }
    if (event.ability.guid === SPELLS.MIND_FLAY.id) {
      // Completely ignore this with regards to channeling since we use `applybuff` to track channel start, and this cast-event can occur as ticks too
      return;
    }
    super.on_byPlayer_cast(event);
  }
  // We can't use the `cast`-event for Mind Flay as this event can occur in the log during channel as ticks too
  on_byPlayer_applybuff(event) {
    if (event.ability.guid === SPELLS.MIND_FLAY.id) {
      this.beginChannel(event);
    }
  }

  cancelChannel(event, ability) {
    if (this.isChannelingSpell(SPELLS.MIND_FLAY.id) || this.isChannelingSpell(SPELLS.VOID_TORRENT_TALENT.id)) {
      // If a channeling spell is "canceled" it was actually just ended, so if it looks canceled then instead just mark it as ended
      this.log('Marking', this._currentChannel.ability.name, 'as ended since we started casting something else:', event.ability.name);
      this.endChannel(event);
    } else {
      super.cancelChannel(event, ability);
    }
  }

  // Looking at `removebuff` will includes progress towards a tick that never happened. This progress could be considered downtime as it accounts for nothing.
  // If it's ever decided to consider the time between last tick and channel ending as downtime, just change the endchannel trigger.
  on_byPlayer_removebuff(event) {
    if (event.ability.guid === SPELLS.MIND_FLAY.id || event.ability.guid === SPELLS.VOID_TORRENT_TALENT.id) {
      this.endChannel(event);
    }
  }
}

export default Channeling;
