import React from "react";
import {TemplateTable} from "common/TemplateTable";
import {ITEMS, TABLE_COLUMNS} from "./config";

export const FeaturesForm: React.FC = () => {
  return (
    <>
      <TemplateTable data={ITEMS} columns={TABLE_COLUMNS} tableHeight={700} checkboxSelection />
    </>
  );
};
