import React from "react";
import { CMSType, FieldDescription, FieldProps } from "firecms";
import CalendarYear  from '@/app/components/Calendar'
import { T_Calendario_Evento } from "./models";

interface CustomColorTextFieldProps {
    color: string
}

export default function CustomColorTextField({
        property,
        value,
        setValue,
        setFieldValue, // use this function to update a different field
        customProps,
        touched,
        error,
        isSubmitting,
        context, // the rest of the entity values here
        ...props
    }: FieldProps<CMSType[], any, any>) {
    return (
        <>
            <CalendarYear initialValues={value as {[key:string]:T_Calendario_Evento[]}[]} onSelectDate={(evt: any) => {
                           setValue(
                               evt.target.value
                           );
                }} editable={true}/>

            <FieldDescription property={property}/>
        </>

    );

}

