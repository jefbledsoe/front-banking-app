import React from "react";
import Field from "./Field";

function UserInputFields(props) {
  let fields = props.fields;

  return (
    <div id="user-input-form-fields-list" className="container m-3">
      {fields.map((field, index) => {
        return (
          <Field
            key={index}
            id={field.id}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            value={field.value}
            onChange={field.onChange}
            isFieldEnabled={field.isFieldEnabled}
            isFieldExtraMessageEnabled={field.isFieldExtraMessageEnabled}
            fieldExtraMessage={field.fieldExtraMessage}
          />
        );
      })}
    </div>
  );
}

export default UserInputFields;
