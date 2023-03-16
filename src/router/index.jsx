import routes from "./config"
import RouterView from "./router-view"

const routerList = [...routes]

const Routes = () => {
  return <RouterView route={routerList} />
}
export default Routes
