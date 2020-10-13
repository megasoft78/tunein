import express, {Request, Response} from 'express';
import { StatService } from '../services/stat.service';
import constants from '../constants';

class StatController {

  private statService: StatService = new StatService();
  private response = {...constants.defaultServerResponse};

  getAll = async (req: Request, res: Response) => {
    try {
      const resp = await this.statService.getAll();
      this.response.status = 200;
      this.response.body = resp;
    } catch (error) {
      this.response.message = error.message;
    }
    return res.status(this.response.status).send(this.response);
  }

  getStatById = async(req: Request, res: Response) => {
    try {
      const resp = await this.statService.getStatById(req.params);
      this.response.status = 200;
      this.response.body = resp;
    } catch (error) {
      this.response.message = error.message;
    }
    return res.status(this.response.status).send(this.response);
  }

  createStat = async(req: Request, res: Response) => {
    try {
      const resp = await this.statService.createStat(req.body);
      this.response.status = 200;
      this.response.body = resp;
    } catch (error) {
      this.response.message = error.message
    }
  }
}

export { StatController }
