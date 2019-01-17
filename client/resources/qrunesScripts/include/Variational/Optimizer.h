
#ifndef OPTIMIZER_H
#define OPTIMIZER_H


#include "var.h"
#include "expression.h"
#include "utils.h"

namespace QPanda {
namespace Variational
{

class Optimizer
{
public:
    virtual std::unordered_set<var> get_variables() =0;
	virtual bool run(std::unordered_set<var> &) = 0;
    virtual std::unordered_map<var, MatrixXd> compute_gradients(std::unordered_set<var> &) = 0;
    virtual double get_loss()=0;
};

enum class OptimizerMode
{
    MINIMIZE,
    MAXIMIZE,
};

class VanillaGradientDescentOptimizer : public Optimizer
{
	expression m_cost_function;
	double m_learning_rate;
	double m_stop_condition;
	OptimizerMode m_mode;
public:    
    VanillaGradientDescentOptimizer(
        var lost_function,
        double learning_rate = 0.01,
        double stop_condition = 1.e-6,
        OptimizerMode mode = OptimizerMode::MINIMIZE);
    std::unordered_map<var, MatrixXd> compute_gradients(std::unordered_set<var> &);
    std::unordered_set<var> get_variables();
    static std::shared_ptr<Optimizer>
        minimize(var,double,double);
	bool run(std::unordered_set<var> &);
	double get_loss();
};

}
}


#endif // ! OPTIMIZER_H