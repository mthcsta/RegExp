string = 'supermercado superação hiperMERCADO Mercado'

puts string.scan(/(?:super)[\À-ü]+/i).join(' ') # R: supermercado superação

# positive lookbehind
puts string.scan(/(?<=super)[\wÀ-ü]+/i).join(' ') # R: mercado ação

# negative lookbehind
puts string.scan(/(?<!super)mercado/i).join(' ') # R: MERCADO Mercado