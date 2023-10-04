import { Transactione } from "../entities";
import { AppDataSource } from "../data-source";

export default AppDataSource.getRepository(Transactione);
