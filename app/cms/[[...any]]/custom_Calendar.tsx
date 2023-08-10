import React from "react";
import { FieldDescription, FieldProps } from "firecms";
import CalendarYear  from '@/app/components/Calendar'

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
    }: FieldProps<string, CustomColorTextFieldProps>) {

    return (
        <>
            <CalendarYear initialValues={value} onSelectDate={(evt: any) => {
                console.log(evt)
                        //    setValue(
                        //        evt.target.value
                        //    );
                }} editable={true}/>

            <FieldDescription property={property}/>
        </>

    );

}

