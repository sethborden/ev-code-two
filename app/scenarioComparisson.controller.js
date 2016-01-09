(function() {
    'use strict';
    angular.module('app')
    .controller('scenarioComparisonController', scnComp);

    scnComp.$inject = ['evScenarios'];
    function scnComp(evScenarios) {
        var vm = this;
        vm.isCollapsed = false;
        vm.activeTab = 0;
        vm.scenarios = evScenarios.scenarios;
        vm.capStructs = evScenarios.capStructs;
        vm.assets = evScenarios.assets;
        vm.stress = evScenarios.stress;
        vm.selectedScenarios = [];
        vm.scenarioCount = 3;
        vm.setScenario = setScenario;
        for (var i = 0; i < vm.scenarioCount; i++) {
            vm.setScenario(i, 0);
        }

        function setScenario(selectedId, scenarioId) {
            vm.selectedScenarios[selectedId] = vm.scenarios[scenarioId];
        }

        vm.getAsset = function(id) {
            return vm.assets.filter(function(a) {
                return a.id === id;
            })[0];
        };

        vm.getStruct = function(id) {
            return vm.capStructs.filter(function(c) {
                return c.id === id;
            })[0];
        };

        vm.getStress = function(id) {
            return vm.stress.filter(function(s) {
                return s.id === id;
            })[0];
        };

        return vm;
    }
})();
