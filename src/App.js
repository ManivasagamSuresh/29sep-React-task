import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from './Card';


function App() {
  let CardDetails = [
    {
      name: "free",
      price: "0$",
      feature: [
        {
          name: "single user"
        },
        {
          name: "5gb Storage"
        },
        {
          name: "unlimited public Project"
        },
        {
          name: "Community Access"
        },
        {
          name: "unlimited private Project"
        },
        {
          name: "Dedicated Phone support"
        },
        {
          name: "Free sub domain"
        },
        {
          name: "Monthly Status reports"
        }
      ]
    },
    {
      name: "Plus",
      price: "12$",
      feature: [
        {
          name: "single user"
        },
        {
          name: "5gb Storage"
        },
        {
          name: "unlimited public Project"
        },
        {
          name: "Community Access"
        },
        {
          name: "unlimited private Project"
        },
        {
          name: "Dedicated Phone support"
        },
        {
          name: "Free sub domain"
        },
        {
          name: "Monthly Status reports"
        }]
    },
    {
      name: "Pro",
      price: "21$",
      feature: [
        {
          name: "single user"
        },
        {
          name: "5gb Storage"
        },
        {
          name: "unlimited public Project"
        },
        {
          name: "Community Access"
        },
        {
          name: "unlimited private Project"
        },
        {
          name: "Dedicated Phone support"
        },
        {
          name: "Free sub domain"
        },
        {
          name: "Monthly Status reports"
        }]
    }
  ]


  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              CardDetails.map((items) => {
                return <Card card={items}></Card>

              })

            }

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
