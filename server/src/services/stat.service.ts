import { Stat } from "../models/stats.model";
import { formatData, checkObjectId } from "../utils";
import constants from '../constants';

class StatService {
	getAll = async () => {
		try {
			const stats = Stat.find({});
			return formatData(stats);
		} catch (error) {
			throw new Error(error);
		}
  };

  getStatById = async( id : any) => {
    try {
      checkObjectId(id);
      const stat = await Stat.findById(id);

      if(!stat) {
        throw new Error(constants.statMessage.STAT_NOT_FOUND);
      }
      return formatData(stat);
    } catch (error) {
      throw new Error(error);
    }
  }

  createStat = async(data: any) => {
    try{
      const stat = new Stat({...data});
      const resp = await stat.save();
      return formatData(resp);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { StatService };
