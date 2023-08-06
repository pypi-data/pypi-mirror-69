#ifndef LFORTRAN_PARSER_PARSER_H
#define LFORTRAN_PARSER_PARSER_H

#include <fstream>
#include <algorithm>
#include <memory>

#include <lfortran/parser/tokenizer.h>

namespace LFortran
{

class Parser
{
    std::string inp;

public:
    Allocator &m_a;
    Tokenizer m_tokenizer;
    std::vector<LFortran::AST::ast_t*> result;

    Parser(Allocator &al) : m_a{al} {}
    void parse(const std::string &input);
    int parse();


private:
};

// Parses Fortran code to AST
LFortran::AST::ast_t *parse(Allocator &al, const std::string &s);

// Just like `parse`, but prints a nice error message to std::cout if a syntax
// error happens:
LFortran::AST::ast_t *parse2(Allocator &al, const std::string &s);

// Parse multiple translation units
std::vector<LFortran::AST::ast_t*> parsen(Allocator &al, const std::string &s);

// Prints a nice error message to std::cout
void show_syntax_error(const std::string &filename, const std::string &input,
        const Location &loc, const int token, const std::string *tstr=nullptr);

} // namespace LFortran

#endif
