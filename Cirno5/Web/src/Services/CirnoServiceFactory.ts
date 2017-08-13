import { ICirnoApi } from './ICirnoApi';
import {MockCirnoApi} from './MockCirnoApi';

class CirnoApiFactory {
    static GetCirnoApi(environment: string) : ICirnoApi {
        if (environment === "Standalone") {
            return new MockCirnoApi();
        }
    }
}
let CirnoApi = CirnoApiFactory.GetCirnoApi("Standalone");
export default CirnoApi;