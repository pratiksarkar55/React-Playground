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
//let prev: React.RefObject<HTMLInputElement> | null = null;
const RefDemo = () => {
  const [value, setValue] = useState<string>("");
  // const refValue = React.createRef<HTMLInputElement>();
  const refValue = useRef<HTMLInputElement>(null);
  //console.log(prev === refValue);
 // prev = refValue;
  useEffect(() => {
   // console.log("refValue1", refValue);
    if (refValue && refValue.current) {
      refValue.current.focusChild();
      console.log("refValue", refValue.current);
    }
  }, [value]);

  return (
    <div>
      <Child
        value={value}
        onChange={setValue}
      //  forwardedRef={refValue}
        ref={refValue}
      />
      {/* {<ChildClass value={value} onChange={setValue} forwardedRef={refValue} />} */}
    </div>
  );
};

interface propType {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
 // forwardedRef: React.RefObject<HTMLInputElement>;
}

 const Child = React.forwardRef<HTMLInputElement, propType>((props, refObj) => {
  //const Child = (props: propType) => {
   const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(refObj, () => {
    return {
       ...inputRef.current,
       value: "value from imperative",
      focusChild: () => inputRef.current?.focus(),
      // focusChild:()=>inputRef?.current?.focus()
    } as HTMLInputElement;
  });
 //console.log('refObj',refObj);
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

// interface propTypeClassBased {
//   value: string;
//   onChange: React.Dispatch<React.SetStateAction<string>>;
//   forwardedRef:React.RefObject<HTMLInputElement>
// }
// const ChildComponentWithRef = React.forwardRef<HTMLInputElement, propType>(
//   (props, ref) => {
//     return <ChildClass {...props} forwardedRef={ref} />;
//   }
// );

// Define an interface for the props
interface MyComponentProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  forwardedRef: React.ForwardedRef<HTMLInputElement>;
}

class ChildClass extends React.Component<MyComponentProps> {
  render(): React.ReactNode {
    console.log(this.props);
    return (
      <>
        <input
          value={this.props.value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            this.props.onChange(e.target.value);
          }}
          ref={this.props.forwardedRef}
        />
      </>
    );
  }
}

export default RefDemo;
