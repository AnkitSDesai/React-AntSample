import React from "react";

import { Col, Tooltip, Icon, Avatar } from "antd";

import PageHeader from "ant-design-pro/lib/PageHeader";
import { ChartCard } from "ant-design-pro/lib/Charts";
import ContactDetails from "../contactDetails";

class ContactCard extends React.PureComponent {
  state = {
    visibleDetails: false
  };
  showDetails = () => {
    console.log("visibleDetails", true);
    this.setState({
      visibleDetails: true
    });
  };
  closeDetails = () => {
    this.setState({
      visibleDetails: false
    });
  };
  render() {
    const {
      title,
      icon,
      firstName,
      lastName,
      contactType,
      contact
    } = this.props;
    return (
      <React.Fragment>
        <Tooltip title="Click to show the contact details">
          <ChartCard
            onClick={this.showDetails}
            title={title}
            // avatar={<Avatar icon={icon} />}
            action={
              <Tooltip title="Main contact">
                <Icon type={contactType} /> {contact}
              </Tooltip>
            }
            total={
              <span>
                {firstName} {lastName}
              </span>
            }
          />
        </Tooltip>
        <ContactDetails
          visible={this.state.visibleDetails}
          onClose={this.closeDetails}
        />
      </React.Fragment>
    );
  }
}

ContactCard.defaultProps = {
  icon: "user",
  contactType: "phone",
  contact: "443-784-6787"
};

export default ContactCard;
