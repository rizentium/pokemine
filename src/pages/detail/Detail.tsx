import { PageHeader } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { DetailPageBody } from "./DetailBodyComponent";
import { DetailPageBottom } from "./DetailBottomComponent";

function DetailPage () {
  const history = useHistory();

  return (
  	<div>
    	<PageHeader
      	title="Pokemon Detail"
        onBack={() => { history.goBack() }}
      />
      <DetailPageBody />
			<DetailPageBottom />
			<br />
    </div>
  );
}

export default DetailPage;