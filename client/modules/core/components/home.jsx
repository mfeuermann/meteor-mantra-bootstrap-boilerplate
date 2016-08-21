import React from 'react';
import { Label, Panel, Breadcrumb } from 'react-bootstrap';


const title = (
  <h3>Tickets</h3>
);

const Home = () => (
<div>
    <Breadcrumb>
     <Breadcrumb.Item active>
       Dashboard
     </Breadcrumb.Item>
   </Breadcrumb>

   <h4>Dashboard</h4>
  <div className='row'>
      <div className="col-lg-6">
        <Panel header={title}>
          <div>
            <table className="table table-bordered table-hover table-stripped">
            <thead>
              <tr>
                <th>Date</th>
                <th>Owner</th>
                <th>State</th>
                <th>Title</th>
                <th>Description</th>
                <th>Last activity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15.6.2016</td>
                <td>MFEUERMANN</td>
                <td><Label bsStyle="success">Opened</Label></td>
                <td>Information about LLIR</td>
                <td>...</td>
                <td>15.8.2015</td>
                <td></td>
              </tr>
              <tr>
                <td>15.6.2016</td>
                <td>MFEUERMANN</td>
                <td><Label bsStyle="success">Opened</Label></td>
                <td>Information about LLIR</td>
                <td>...</td>
                <td>15.8.2015</td>
                <td></td>
              </tr>
              <tr>
                <td>15.6.2016</td>
                <td>MFEUERMANN</td>
                <td><Label bsStyle="success">Opened</Label></td>
                <td>Information about LLIR</td>
                <td>...</td>
                <td>15.8.2015</td>
                <td></td>
              </tr>
              <tr>
                <td>15.6.2016</td>
                <td>MFEUERMANN</td>
                <td><Label bsStyle="success">Opened</Label></td>
                <td>Information about LLIR</td>
                <td>...</td>
                <td>15.8.2015</td>
                <td></td>
              </tr>
              <tr>
                <td>15.6.2016</td>
                <td>MFEUERMANN</td>
                <td><Label bsStyle="success">Opened</Label></td>
                <td>Information about LLIR</td>
                <td>...</td>
                <td>15.8.2015</td>
                <td></td>
              </tr>

            </tbody>
          </table>
          </div>
        </Panel>
      </div>
  </div>
</div>
);

export default Home;
