import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const DoggoForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.doggo?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.doggo?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="gender"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Gender
        </Label>

        <TextField
          name="gender"
          defaultValue={props.doggo?.gender}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="gender" className="rw-field-error" />

        <Label
          name="weightCategory"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Weight category
        </Label>

        <TextField
          name="weightCategory"
          defaultValue={props.doggo?.weightCategory}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="weightCategory" className="rw-field-error" />

        <Label
          name="species"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Species
        </Label>

        <TextField
          name="species"
          defaultValue={props.doggo?.species}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="species" className="rw-field-error" />

        <Label
          name="breed"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Breed
        </Label>

        <TextField
          name="breed"
          defaultValue={props.doggo?.breed}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="breed" className="rw-field-error" />

        <Label
          name="color"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Color
        </Label>

        <TextField
          name="color"
          defaultValue={props.doggo?.color}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="color" className="rw-field-error" />

        <Label
          name="location"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Location
        </Label>

        <TextField
          name="location"
          defaultValue={props.doggo?.location}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="location" className="rw-field-error" />

        <Label
          name="site"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Site
        </Label>

        <TextField
          name="site"
          defaultValue={props.doggo?.site}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="site" className="rw-field-error" />

        <Label
          name="permalink"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Permalink
        </Label>

        <TextField
          name="permalink"
          defaultValue={props.doggo?.permalink}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="permalink" className="rw-field-error" />

        <Label
          name="jsonThumbsUrls"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Json thumbs urls
        </Label>

        <TextAreaField
          name="jsonThumbsUrls"
          defaultValue={JSON.stringify(props.doggo?.jsonThumbsUrls)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsJSON: true, required: true }}
        />

        <FieldError name="jsonThumbsUrls" className="rw-field-error" />

        <Label
          name="age"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Age
        </Label>

        <TextField
          name="age"
          defaultValue={props.doggo?.age}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="age" className="rw-field-error" />

        <Label
          name="adoptedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Adopted at
        </Label>

        <DatetimeLocalField
          name="adoptedAt"
          defaultValue={formatDatetime(props.doggo?.adoptedAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="adoptedAt" className="rw-field-error" />

        <Label
          name="lastSeenAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last seen at
        </Label>

        <DatetimeLocalField
          name="lastSeenAt"
          defaultValue={formatDatetime(props.doggo?.lastSeenAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="lastSeenAt" className="rw-field-error" />

        <Label
          name="deletedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deleted at
        </Label>

        <DatetimeLocalField
          name="deletedAt"
          defaultValue={formatDatetime(props.doggo?.deletedAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="deletedAt" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DoggoForm
