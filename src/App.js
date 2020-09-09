import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";

import "bootstrap-4-grid/css/grid.min.css";
import { Button } from "@progress/kendo-react-buttons";
import { savePDF } from "@progress/kendo-react-pdf";
import "@progress/kendo-theme-material/dist/all.css";
import { Ripple } from "@progress/kendo-react-ripple";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { Input } from "@progress/kendo-react-inputs";
import { PieChart } from "./components/PieChart";
import { BarChart } from "./components/BarChart";
import { GridContainer } from "./components/GridContainer";
import { PanelBarContainer } from "./components/PanelBarContainer";

class App extends Component {
  constructor(props) {
    super(props);

    this.appContainer = React.createRef();

    this.state = {
      showDialog: false,
    };
  }

  handlePDFExport = () => {
    savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: "auto" });
  };

  handleShare = () => {
    this.setState(
      {
        showDialog: !this.state.showDialog,
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <Ripple>
        <div className="bootstrap-wrapper">
          <div
            className="app-container container"
            ref={(el) => (this.appContainer = el)}
          >
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-cl-6">
                <h1>Products Inventory | Nutrition</h1>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-cl-6 buttons-right">
                <Button primary={true} onClick={this.handleShare}>
                  Share
                </Button>
                <Button onClick={this.handlePDFExport}>Export to PDF</Button>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                <h4>
                  <PanelBarContainer />
                </h4>
              </div>
              <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <h4>
                      <PieChart />
                    </h4>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                    <div className="percentage-container">
                      <span className="percentage-number">94</span>
                      <span className="percentage-sign">%</span>
                      <p>Customer Satisfaction</p>
                    </div>
                    <div className="percentage-container">
                      <span className="percentage-number">89</span>
                      <span className="percentage-sign">%</span>
                      <p>TARGET SALES</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h4>
                      <BarChart />
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h4>
                      <GridContainer />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {this.state.showDialog && (
              <Dialog title={"Share this report"} onClose={this.handleShare}>
                <p>Please enter the email address of the recipient.</p>
                <Input placeholder="dixiecarter@tna.com" />
                <DialogActionsBar>
                  <Button primary={true} onClick={this.handleShare}>
                    Share
                  </Button>
                  <Button onClick={this.handleShare}>Cancel</Button>
                </DialogActionsBar>
              </Dialog>
            )}
          </div>
        </div>
      </Ripple>
    );
  }
}

export default App;
