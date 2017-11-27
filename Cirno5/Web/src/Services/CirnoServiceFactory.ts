import { ICirnoApi } from './ICirnoApi';
import { MockCirnoApi } from './MockCirnoApi';
import { CirnoApi } from './CirnoApi';

class CirnoApiFactory {
    static GetCirnoApi(environment: string) : ICirnoApi {
        if (environment === "Standalone") {
            return new MockCirnoApi();
        } else if (environment === "Local") {
            return new CirnoApi();
        }
    }
}
let api = CirnoApiFactory.GetCirnoApi("Local");
export default api;