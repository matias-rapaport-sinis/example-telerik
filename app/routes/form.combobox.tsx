import { Field, FieldWrapper, Form, FormElement } from "@progress/kendo-react-form";
import { ComboBox, ComboBoxChangeEvent } from "@progress/kendo-react-dropdowns";
import { useRef, useState } from "react";
import { Label, Hint, Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { FieldRenderProps } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
//https://www.telerik.com/kendo-react-ui/components/getting-started/add-to-existing-project


export const FormComboBoxFilter = (fieldRenderProps: FieldRenderProps) => {
    const {
        validationMessage,
        touched,
        label,
        id,
        textField,
        valid,
        disabled,
        hint,
        wrapperStyle,
        data,
        ...others
    } = fieldRenderProps;
    const [filtrado, setFiltrado] = useState<any[]>(data);
    const editorRef = useRef(null);
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return <FieldWrapper style={wrapperStyle}>
        <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled} className='k-form-label'>
            {label}
        </Label>
        <div className={'k-form-field-wrap'}>
            <ComboBox
                textField={textField}
                data={filtrado}
                filterable={true}
                onFilterChange={(e) => {
                    const filter = e.filter.value.toLowerCase();
                    const filteredData = data.filter((item: any) => item[`${textField}`].toLowerCase().includes(filter));
                    setFiltrado(filteredData);
                }}
                ariaLabelledBy={labelId}
                ariaDescribedBy={`${hintId} ${errorId}`}
                ref={editorRef}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others} />
            {showHint && <Hint id={hintId}>{hint}</Hint>}
            {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
        </div>
    </FieldWrapper>;
};

export const FormComboBoxSimple = (fieldRenderProps: FieldRenderProps) => {
    const {
        validationMessage,
        touched,
        label,
        id,
        valid,
        disabled,
        hint,
        wrapperStyle,
        ...others
    } = fieldRenderProps;
    const editorRef = useRef(null);
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return <FieldWrapper style={wrapperStyle}>
        <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled} className='k-form-label'>
            {label}
        </Label>
        <div className={'k-form-field-wrap'}>
            <ComboBox
                filterable={true}
                ariaLabelledBy={labelId}
                ariaDescribedBy={`${hintId} ${errorId}`}
                ref={editorRef}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others} />
            {showHint && <Hint id={hintId}>{hint}</Hint>}
            {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
        </div>
    </FieldWrapper>;
};

const requiredValidator = value => value ? "" : "Error: This field is required.";
// https://www.telerik.com/kendo-react-ui/components/form/guidelines-with-examples/#toc-dropdowns

export default function Example() {
    const [lista, setLista] = useState<any[]>([
        { text: "Coco", id: 1 },
        { text: "Frutilla", id: 2 },
        { text: "Banana", id: 3 },
        { text: "Manzana", id: 4 },
        { text: "Pera", id: 5 },
        { text: "Naranja", id: 6 },
        { text: "Durazno", id: 7 },
        { text: "Kiwi", id: 8 },
        { text: "Mango", id: 9 },
        { text: "Anana", id: 10 },
        { text: "Pomelo", id: 11 },
        { text: "Melon", id: 12 },
        { text: "Sandia", id: 13 },
        { text: "Uva", id: 14 },
        { text: "Ciruela", id: 15 },
        { text: "Mandarina", id: 16 },
        { text: "Pomelo", id: 17 },
        { text: "Pera", id: 18 },
        { text: "Kiwi", id: 19 },
        { text: "Anana", id: 21 },
        { text: "Pomelo", id: 22 },
        { text: "Melon", id: 23 },
        { text: "Sandia", id: 24 },
        { text: "Uva", id: 25 },
        { text: "Ciruela", id: 26 },
        { text: "Mandarina", id: 27 },
        { text: "Pomelo", id: 28 },
        { text: "Pera", id: 29 },
        { text: "Kiwi", id: 30 },
        { text: "Anana", id: 32 },
        { text: "Pomelo", id: 33 },
        { text: "Melon", id: 34 },
        { text: "Sandia", id: 35 },
        { text: "Uva", id: 36 },
        { text: "Ciruela", id: 37 },
        { text: "Mandarina", id: 38 },
        { text: "Pomelo", id: 39 },
        { text: "Pera", id: 40 },
        { text: "Kiwi", id: 41 },
        { text: "Anana", id: 43 },
        { text: "Pomelo", id: 44 },
        { text: "Melon", id: 45 },
        { text: "Sandia", id: 46 },
        { text: "Uva", id: 47 },

    ]);
    const [listaFiltrable, setListaFiltrable] = useState<any[]>(lista);
    const [itemSelected, setItemSelected] = useState<any>(lista[0]);

    const [listaFiltrable2, setListaFiltrable2] = useState<any[]>(lista);
    return (
        <>
            <div>Example</div>
            <Form
                initialValues={{
                    lista: itemSelected,
                    id: itemSelected.id,
                    fruta: itemSelected,
                    id2: itemSelected.id,
                    fruta3: itemSelected,
                    id3: itemSelected.id
                }}
                onSubmit={(dataItem, event) => {
                    console.log(dataItem);
                    event?.preventDefault();
                    
                }}
                render={(fromRenderProps) => (
                    <FormElement>
                        <FieldWrapper>
                            <Field
                                name="lista"
                                textField="text"
                                component={ComboBox}
                                data={listaFiltrable}
                                filterable={true}
                                onFilterChange={(e) => {
                                    const filter = e.filter;
                                    const data = lista.filter(item => item.text.toLowerCase().includes(filter.value.toLowerCase()));
                                    setListaFiltrable(data);
                                    //fromRenderProps.onChange('lista', { value: data });
                                }}
                                onChange={(e) => {
                                    const item = e.target.value;
                                    if (lista.some(listItem => listItem.id === item.id)) {
                                        setItemSelected(item);
                                        fromRenderProps.onChange('id', { value: item.id });
                                    }
                                }}
                            />
                        </FieldWrapper>
                        <FieldWrapper>
                            <Field
                                name={"id"}
                                component={Input}
                                type={"number"}
                                label={"id"}
                            />
                        </FieldWrapper>

                        <Field
                            id="fruta"
                            name="fruta"
                            label="Fruta"
                            component={FormComboBoxFilter}
                            textField="text"
                            data={lista}
                            validator={(value) => { return value !== undefined ? "" : "Campo requerido" }}
                            onChange={(event: ComboBoxChangeEvent) => {
                                fromRenderProps.onChange('id2', { value: event.target.value.id });
                            }}
                        />

                        <FieldWrapper>
                            <Field
                                name={"id2"}
                                component={Input}
                                type={"number"}
                                label={"id2"}
                            />
                        </FieldWrapper>

                        <Field
                            id="fruta3"
                            name="fruta3"
                            label="Fruta3"
                            component={FormComboBoxSimple}
                            textField="text"
                            data={listaFiltrable2}
                            validator={requiredValidator}
                            onChange={(event: ComboBoxChangeEvent) => {
                                fromRenderProps.onChange('id3', { value: event.target.value.id });
                            }}
                            onFilterChange={(event) => {
                                const filter = event.filter.value;
                                const data = lista.filter(item => item.text.toLowerCase().includes(filter.toLowerCase()));
                                setListaFiltrable2(data);
                            }}
                        />

                        <FieldWrapper>
                            <Field
                                name={"id3"}
                                component={Input}
                                type={"number"}
                                label={"id3"}
                            />
                        </FieldWrapper>

                        <div className="k-form-buttons">
                            <Button disabled={!fromRenderProps.allowSubmit} type="submit">
                                Submit
                            </Button>
                        </div>
                    </FormElement>
                )}
            />
        </>
    );
}