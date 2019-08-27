circuit controlfunc(vector<qubit> qvec, int index, int value) {
    let cd = qvec.length() / 2;
    vector<qubit> qvtemp;
    qvtemp = qvec[0:cd];
    if (index == 1) {
        X(qvec[0]);
    } else if (index == 2) {
        X(qvec[1]);
    } else if (index == 0) {
        X(qvec[0]);
        X(qvec[1]);
    }

    if (value == 1) {
        X(qvec[3]).control(qvtemp);
    } else if (value == 2) {
        X(qvec[2]).control(qvtemp);
    } else if (value == 3) {
        X(qvec[2]).control(qvtemp);
        X(qvec[3]).control(qvtemp);
    }

    if (index == 1) {
        X(qvec[0]);
    } else if (index == 2) {
        X(qvec[1]);
    } else if (index == 0) {
        X(qvec[0]);
        X(qvec[1]);
    }
}

circuit oraclefunc(vector<qubit> qvec, vector<int> funvalue) {
    let cd = qvec.length()/2;
    for (let i=0: 1: 4){
        let value = funvalue[i];
        controlfunc(qvec, i, value);
    }
}

Simon_QProg(vector<qubit> qvec, vector<cbit> cvec, vector<int> funvalue) {
    let cd = cvec.length();
    for (let i=0: 1: cd) {
        H(qvec[i]);
    }
    oraclefunc(qvec, funvalue);
    for (let i=0: 1: cd) {
        H(qvec[i]);
    }
    for (let i=0: 1: cd) {
        measure(qvec[i], cvec[i]);
    }
}

