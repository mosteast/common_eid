export enum EID_common {
  // !!!
  // EID SHOULD NEVER BE CHANGED
  //
  // Once an EID is set and published we must never change it.
  // For instance `base_error` should always be 'e00' and
  // invalid_argument should always be 'e01'.
  // If new EID is needed just increment the code number.
  // !!!

  // Common EID starts with string 'e0',
  // custom app EID should start with string 'e'.

  base_error = "e0",
  invalid_argument = "e1",
  lack_config = "e2",
  lack_path = "e3",
  lack_argument = "e4",
  permission_denied = "e5",
  bad_connection = "e6",
  invalid_state = "e7",
  invalid_credential = "e8",
  too_frequent = "e9",
  invalid_configuration = "e10",
  invalid_environment_variable = "e11",
}
