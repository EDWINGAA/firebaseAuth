import FormsFirebase from "./page/FormsFirebase"
import { AuthProvider } from "./context/authContext"
function App() {
  return (
    <div>
<AuthProvider>
 <h1>CoffeeANDCode</h1>
<FormsFirebase />
</AuthProvider>
  </div>
  );
}

export default App;
