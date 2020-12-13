import React from "react";
import { Container, Row } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import DeviceGroup from "./../components/dashboard/DeviceGroup";

import DivisionService from "./../services/DivisionService";

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: 0,
			divisions: []
		}
  	}

	componentDidMount() {
		this.setState({ loading: 1 });
		DivisionService.getDivisions(1)
			.then(data => { 
				console.log(data);
				this.setState({ 
					loading: 0,
					divisions: data
				}) 
			})
			.catch(error => {
				console.log(error) ;
				this.setState({ loading: 2 })
			});
	}
  
	render() {
		var content = ""
		switch(this.state.loading) {
			case 0:
				content = this.state.divisions.map(div => (
					<DeviceGroup key={ div.id } division={ div } />
				))
				break;
			case 1:
				content = "Loading...";
				break;
			case 2:
				content = "Ups! Something Went Wrong...";
				break;
		}
		return (
			<Container fluid className="main-content-container px-4">
				{/* Page Header */}
				<Row noGutters className="page-header py-4">
					<PageTitle title="Dashboard" subtitle="" className="text-sm-left mb-3" />
				</Row>

				{ content }

				{/* <DeviceGroup division="Kitchen">
				<DeviceCard title="Lights" progress={95} type="light" />
				</DeviceGroup>

				<DeviceGroup division="Living Room">
				<DeviceCard title="Air Conditioning" progress={95} type="temperature" />
				</DeviceGroup>

				<DeviceGroup division="Bedroom #1">
				<DeviceCard title="Zumifier" progress={10} type="humidity" />
				<DeviceCard title="Radiator" progress={35} type="temperature" />
				</DeviceGroup>

				<DeviceGroup division="Bedroom #2">
				<DeviceCard title="Zumifier" progress={55} type="humidity" />
				<DeviceCard title="Radiator" progress={40} type="temperature" />
				<DeviceCard title="Presence Light" progress={5} type="light" />
				</DeviceGroup> */}
			</Container>
		)
	}
}

export default Dashboard;
