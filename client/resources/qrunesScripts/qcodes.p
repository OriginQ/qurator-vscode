circuit<vector<qubit>,qubit> generate_two_qubit_oracle(vector<bool> oracle_function){
    return lambda (vector<qubit> qlist,qubit qubit2):{
        if (oracle_function[0] == false &&
            oracle_function[1] == true)
        {
            // f(x) = x;
            CNOT(qlist[0], qubit2);
        }
        else if (oracle_function[0] == true &&
            oracle_function[1] == false)
        {
            // f(x) = x + 1;
            CNOT(qlist[0], qubit2);
            X(qubit2);
        }
        else if (oracle_function[0] == true &&
            oracle_function[1] == true)
        {
            // f(x) = 1
            X(qubit2);
        }
        else
        {
            // f(x) = 0, do nothing
        }
    };
}

Deutsch_Jozsa_algorithm(vector<qubit> qlist,qubit qubit2,vector<cbit> clist,circuit<vector<qubit>,qubit> oracle){
    X(qubit2);
    apply_QGate(qlist, H);
    H(qubit2);
    oracle(qlist,qubit2);
    apply_QGate(qlist, H);
    measure_all(qlist,clist);
}

