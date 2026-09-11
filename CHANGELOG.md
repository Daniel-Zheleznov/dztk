v 0.1.0
-------
    * Added status to the trades
    * Made better filters for the user inputs, to avoid entering wrong datatypes
    * Made update button to modify trades locally.
    * Made sold button to sell locally
    * Made TotalInspector, but still needs work due to having no backend.
    * Made CHANGELOG.md for official releases

    TODO v 0.2.0
    ------------
    * Make a backend in flask
    * Implement Protobuf to similar technology to have consistent datatypes (structs)

v 0.0.2
-------
    * Corrected formatting for buy_date value for unique_id = 5
    * Made the inputs editable by client, without affecting global trade value
        - Now a function can check when a client types to provide validate
        input.
    * Fixed type value to use options instead of input, for dropdown
    * Fixed input type for buy_date and sell_date to behave like a calendar