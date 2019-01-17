    ker(qvec q, cvec c) {
        let i = 0;
        for (i: 1: len(q)) {
            H(q[i]);
            Measure(q[i], c[i]);
        }

        qif (c[0]) {
            H(q[1]);
        } qelse {
            H(q[2]);
        }
    }

