package pb

import "reflect"

// haveUnrecognized returns true if the given protobuf generated structure
// contains unrecognized fields.
//
// The given data must not have cyclic pointers.
func haveUnrecognized(proto interface{}) bool {
	return haveUnrecognizedValue(reflect.ValueOf(proto))
}

func haveUnrecognizedValue(v reflect.Value) bool {
	v = reflect.Indirect(v)
	if v.Kind() != reflect.Struct {
		if v.Kind() == reflect.Slice {
			for i := 0; i < v.Len(); i++ {
				if haveUnrecognizedValue(v.Index(i)) {
					return true
				}
			}
		}
		return false //not a struct or slice
	}
	for i := 0; i < v.NumField(); i++ {
		if haveUnrecognizedValue(v.Field(i)) {
			return true
		}
	}
	x := v.FieldByName("XXX_unrecognized")
	if !x.IsValid() {
		return false //not a protobuf struct
	}
	return x.Len() != 0
}
