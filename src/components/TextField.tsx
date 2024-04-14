import { TextFieldProps } from "../types/text-fields/TextFieldProps";

export default function TextField(props: TextFieldProps) {
  const {
    id,
    key,
    onInputChange,
    placeholder,
    value,
    disabled,
    onDisabledChange,
  } = props;

  return value !== null ? (
    <div className="w-full h-14 flex justify-center items-center gap-2 bg-gray-100 rounded-lg text-sm relative">
      {disabled ? (
        // when value is not null but disabled
        <input
          id={id}
          key={key}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onInputChange(e.target.value)}
          className="w-full h-full flex justify-center items-center bg-transparent text-sm pl-4 pr-20 rounded-md read-only:"
          readOnly
        />
      ) : (
        // when value is not null and not disabled
        <input
          id={id}
          key={key}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onInputChange(e.target.value)}
          className="w-full h-full flex justify-center items-center bg-transparent text-sm pl-4 pr-20 rounded-md focus:outline focus:outline-primary"
        />
      )}
      {/* save/edit button */}
      <button
        className="absolute right-2 w-16 h-10 flex justify-center items-center bg-primary text-white rounded-lg text-sm"
        onClick={() => onDisabledChange(!disabled)}
      >
        {disabled ? "Edit" : "Save"}
      </button>
    </div>
  ) : (
    // when the value is null (not laoded)
    <Skeleton />
  );
}

function Skeleton() {
  return (
    <div className="skeleton w-full h-14 flex justify-center items-center px-4 bg-gray-100 rounded-lg relative">
      <div className="skeleton absolute right-2 w-16 h-10 flex justify-center items-center bg-white rounded-lg text-sm" />
    </div>
  );
}
