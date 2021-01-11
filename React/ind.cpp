#include <iostream>
#include <string>
#include <cstdint>
#include <vector>
 
using namespace std;
template < size_t size >
std::string encode(const std::string &word, const size_t magic[size][size]) {
    std::string result;
    std::string::value_type encoded[size][size];
 
    // обнуление массива под результат
    for(size_t i = 0; i < size; ++i) {
        for(size_t j = 0; j < size; ++j)
            encoded[i][j] = '\0';
    }
 
    for(size_t i = 0; i < size; ++i)
        for(size_t j = 0; j < size; ++j) {
            if(magic[i][j] <= word.length()) {
                encoded[i][j] = word[magic[i][j] - 1];
            }
        }
    result.clear();
    for(size_t i = 0; i < size; ++i)
        for(size_t j = 0; j < size; ++j)
            if(0 != encoded[i][j])
                result.push_back( encoded[i][j] );
    return result;
}
 
template < size_t size >
std::string decode(const std::string &word, const size_t magic[size][size]) {
    std::string result;
    size_t current;
 
    result.resize(word.length());
    current = 0;
    for(size_t i = 0; i < size; ++i)
        for(size_t j = 0; j < size; ++j) {
            if(magic[i][j] <= word.length()) {
                result[magic[i][j] - 1] = word[current];
                ++current;
                if(current == word.length())
                    goto last;
            }
        }
last:
    return result;
}
 
int main() {
    setlocale(LC_ALL, "Ukrainian");
    const size_t size = 5;
    const size_t squadre[size][size] = {
        { 14,  24,  7, 20,  3},
        {  4,  12, 25,  8, 16},
        { 17,  5,  13, 21,9 },
        {  10, 18,  1,  14,22 },
        { 23,6,19,2,15}

    };
    string word, result;
 
    // ввод слова
    cout << "Enter word: ";
    cin>>word;
    // шифруем
    result = encode(word, squadre);
    // выводим
    cout << "Encoded: " << result << endl;
    cout << "Decoded: " << decode(result, squadre) << endl;
    return 0;
}
