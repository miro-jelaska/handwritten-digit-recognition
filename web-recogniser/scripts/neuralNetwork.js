function NeuralNetwork(input_x_hidden_weights, hidden_x_output_weights){
    this.activationFunction = function sigmoid(x) {
        return 1 / (1 + Math.exp(-x));
    }
    this.input_x_hidden_weights = math.matrix(input_x_hidden_weights);
    this.hidden_x_output_weights = math.matrix(hidden_x_output_weights);
}

NeuralNetwork.prototype.query = function(input_array){
    inputs = math.matrix(input_array);

    hidden_layer_input = math.multiply(inputs, self.input_x_hidden_weights);
    hidden_layer_output = hidden_layer_input.map(x => this.activationFunction(x));

    output_layer_input = math.multiply(hidden_layer_output, self.hidden_x_output_weights);
    output_layer_output = output_layer_input.map(x => this.activationFunction(x));

    return output_layer_output;
}