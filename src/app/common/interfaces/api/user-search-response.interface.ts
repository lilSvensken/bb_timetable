import { CommonResponse } from '@common/interfaces/api/common-response';
import { UserModel } from '@common/interfaces/models/user.model';

export interface UsersSearchResponse extends CommonResponse<UserModel[]> {
}
