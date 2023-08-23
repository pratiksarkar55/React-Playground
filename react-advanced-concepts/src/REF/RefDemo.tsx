import React, {
  ChangeEvent,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

/**
 * Helps in direct access of the DOM node.
 *  Helps in storing values without re-render
 * Helps in caching values
 */
interface customRefI {
  value: string;
  focusChild?: () => void;
}
const RefDemo = () => {
  const [value, setValue] = useState<string>("");
  const refValue = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    console.log("refValue", refValue);
    if (refValue && refValue.current) {
      refValue.current.focusChild();
      console.log(refValue.current.value);
    }
  }, [value]);
  return (
    <div>
      <Child value={value} onChange={setValue} ref={refValue} />
    </div>
  );
};

interface propType {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Child = React.forwardRef<HTMLInputElement | null, propType>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    useImperativeHandle(ref, () => {
      return {
        ...inputRef.current,
        value: "value from imperative",
        focusChild: () => inputRef.current?.focus(),
        // focusChild:()=>inputRef?.current?.focus()
      } as HTMLInputElement;
    });

    return (
      <>
        <input
          value={props.value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            props.onChange(e.target.value);
          }}
          ref={inputRef}
        />
      </>
    );
  }
);

export default RefDemo;
