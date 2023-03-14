import routes from "./config"
import RouterView from "./router-view"
const routerList = [...routes]
const Routes = () => {
  return (
    <div>
      <RouterView route={routerList} />
    </div>
  )
}
export default Routes
