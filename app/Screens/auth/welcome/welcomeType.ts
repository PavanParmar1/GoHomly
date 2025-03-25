export interface locationType {
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  results: [
    {
      address_components: [];
      formatted_address: string;
      geometry: [];
      place_id: string;
      plus_code: [];
      types: [];
    },
  ];
  status: string;
}
