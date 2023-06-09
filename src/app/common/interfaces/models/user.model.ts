import { RoleEnum } from '@common/enums/role.enum';
import { ServiceModel } from '@common/interfaces/models/service.model';
import { CityModel } from '@common/interfaces/models/city.model';
import { GenderEnum } from '@common/enums/gender.enum';


export interface UserModel {
  id?: number;
  role?: RoleEnum;
  nickname?: string;
  email?: string;
  services?: ServiceModel[];
  city?: CityModel;
  lastsName?: string;
  firsName?: string;
  phone?: string;
  gender?: GenderEnum;
  birthday?: string;
  avatar?: string;
  infoYourself?: string;
  myMasters?: UserModel[];
  myClients?: UserModel[];
}
