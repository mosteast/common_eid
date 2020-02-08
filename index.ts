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

  base_error            = 'e00',
  invalid_argument      = 'e01',
  lack_config           = 'e02',
  lack_path             = 'e03',
  lack_argument         = 'e04',
  permission_denied     = 'e05',
  bad_connection        = 'e06',
  invalid_state         = 'e07',
  invalid_credential    = 'e08',
  too_frequent          = 'e09',
  invalid_configuration = 'e010',
}
