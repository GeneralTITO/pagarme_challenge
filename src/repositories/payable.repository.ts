import { Payable } from "../entities";
import { AppDataSource } from "../data-source";

export default AppDataSource.getRepository(Payable);
