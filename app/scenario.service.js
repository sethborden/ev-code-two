
(function() {
    'use strict';
    angular.module('app')
    .service('evScenarios', evScenarios);

    function evScenarios() {
        var self = this;
        self.scenarios = scenarios;
        self.capStructs = capStructs;
        self.stress = stress;
        self.assets = assets;

        self.getScenario = function getScenario(idx) {
            if(idx > -1 && idx < self.scenarios.length) {
                return self.scearios[idx];
            } else {
                throw new Error('Scenario index out of range');
            }
        };
        return self;
    }

    var scenarios = [  
    {  
        "id":4,
        "project_id":1,
        "asset_id":3,
        "capital_structure_id":4,
        "stress_id":null,
        "description":"All equity",
        "done":true,
        "error_messages":null,
        "failure":null
    },
    {  
        "id":5,
        "project_id":1,
        "asset_id":3,
        "capital_structure_id":5,
        "stress_id":null,
        "description":"TE and BL",
        "done":true,
        "error_messages":null,
        "failure":null
    },
    {  
        "id":6,
        "project_id":1,
        "asset_id":3,
        "capital_structure_id":6,
        "stress_id":null,
        "description":"TE and BL revised",
        "done":true,
        "error_messages":null,
        "failure":null
    },
    {  
        "id":7,
        "project_id":1,
        "asset_id":4,
        "capital_structure_id":4,
        "stress_id":8,
        "description":"All equity - GE turbines",
        "done":true,
        "error_messages":null,
        "failure":null
    },
    {  
        "id":8,
        "project_id":1,
        "asset_id":3,
        "capital_structure_id":4,
        "stress_id":null,
        "description":"All equity - stressed",
        "done":true,
        "error_messages":null,
        "failure":null
    }
];

    var capStructs = [  
    {  
        "id":4,
        "project_id":1,
        "use_of_funds":{  
            "Turbine Cost":200000000,
            "Balance of Plant":100000000,
            "Development Costs":50000000,
            "Fees":15000000,
            "Interconnection":25000000,
            "Dev Fee":1000000
        },
        "construction_loan_terms":null,
        "construction_loan_draw_schedule":null,
        "target_irr":0.08,
        "target_value":null,
        "cod_financing":null,
        "macrs":{  
            "MACRS5":0.75,
            "MACRS15":0.1,
            "MACRS25":0.05
        },
        "loan_size":null,
        "include_subsidies":true,
        "description":"Sponsor Equity",
        "display_id":1
    },
    {  
        "id":5,
        "project_id":1,
        "use_of_funds":{  
            "Turbine Cost":200000000,
            "Balance of Plant":100000000,
            "Development Costs":50000000,
            "Fees":15000000,
            "Interconnection":25000000
        },
        "construction_loan_terms":null,
        "construction_loan_draw_schedule":null,
        "target_irr":0.08,
        "target_value":null,
        "cod_financing":null,
        "macrs":{  
            "MACRS5":0.75,
            "MACRS15":0.1,
            "MACRS25":0.05
        },
        "loan_size":null,
        "include_subsidies":true,
        "description":"Tax Equity - 8% IRR",
        "display_id":2
    },
    {  
        "id":6,
        "project_id":1,
        "use_of_funds":{  
            "Turbine Cost":179000000,
            "Balance of Plant":100000000,
            "Development Costs":25000000,
            "Fees":25000000,
            "Interconnection":25000000
        },
        "construction_loan_terms":null,
        "construction_loan_draw_schedule":null,
        "target_irr":0.08,
        "target_value":null,
        "cod_financing":null,
        "macrs":{  
            "MACRS5":0.8,
            "MACRS15":0.1,
            "MACRS25":0.05
        },
        "loan_size":null,
        "include_subsidies":true,
        "description":"P-ship flip 8% / BL @5%",
        "display_id":3
    }
];

    var assets = 
[  
    {  
        "id":3,
        "project_id":1,
        "wind_resource_id":20,
        "offtake_agreement":[  
            {  
                "ramp":0.015,
                "type":"ppa",
                "terms":{  
                    "percentage":1
                },
                "endDate":"2037-01-01",
                "offtaker":"Utility XYZ",
                "startDate":"2017-01-01",
                "startingPrice":40.5
            },
            {  
                "ramp":0,
                "type":"merchant",
                "terms":{  
                    "percentage":1
                },
                "endDate":"2047-01-01",
                "startDate":"2017-01-01",
                "startingPrice":45
            }
        ],
        "annual_maintenance_costs":{  

        },
        "first_year_ramp_up":[  
            1,
            1,
            1,
            1
        ],
        "description":"Base Case | Siemens 1.79-100",
        "display_id":1,
        "insurance":[  
            {  
                "startDate":"2017-01-01",
                "endDate":"2047-01-01",
                "name":"P&C",
                "cost":250000,
                "escalation":0.01
            }
        ],
        "landrent":[  
            {  
                "startDate":"2017-01-01",
                "endDate":"2047-01-01",
                "name":"Land Lease #1",
                "cost":1200000,
                "escalation":0.01
            },
            {  
                "name":"Land Lease #2",
                "startDate":"2017-01-01",
                "endDate":"2025-01-01",
                "cost":750000,
                "escalation":0
            }
        ],
        "property_tax":[  
            {  
                "startDate":"2017-01-01",
                "endDate":"2047-01-01",
                "name":"Taxes",
                "cost":1200000,
                "escalation":0
            }
        ]
    },
    {  
        "id":4,
        "project_id":1,
        "wind_resource_id":18,
        "offtake_agreement":[  
            {  
                "ramp":0.02,
                "type":"ppa",
                "terms":{  
                    "percentage":1
                },
                "endDate":"2037-12-31",
                "offtaker":"Utility XYZ",
                "startDate":"2016-12-31",
                "startingPrice":42
            },
            {  
                "ramp":0.02,
                "type":"merchant",
                "terms":{  
                    "percentage":1
                },
                "endDate":"2046-12-31",
                "startDate":"2037-01-01",
                "startingPrice":40
            }
        ],
        "annual_maintenance_costs":{  
            "annual":250000
        },
        "first_year_ramp_up":[  
            0,
            0,
            0,
            0
        ],
        "description":"Base Case | GE",
        "display_id":2,
        "insurance":[  
            {  
                "startDate":"2016-12-31",
                "endDate":"2046-12-31",
                "name":"Insurance",
                "cost":350000,
                "escalation":0.01
            }
        ],
        "landrent":[  
            {  
                "startDate":"2016-12-31",
                "endDate":"2046-12-31",
                "name":"Rent",
                "cost":1250000,
                "escalation":0.01
            }
        ],
        "property_tax":null
    }
];

    var stress = [  
    {  
        "id":8,
        "description":"High Failure",
        "historical_uncertainty":0,
        "annual_variability":0,
        "mean_wind_speed":0,
        "low_wind_years":{  
            "units":"year",
            "lowWind":0,
            "duration":null
        },
        "downtime":{  
            "units":"year",
            "beginning":null
        },
        "losses":{  
            "1":0,
            "2":0,
            "3":0,
            "4":0,
            "5":0
        },
        "curtailment":0,
        "component_failure":{  
            "gearbox":0.1,
            "generator":0.1,
            "yaw":0.05,
            "blades":0.1
        },
        "project_id":1,
        "display_id":1
    }
];

})();
