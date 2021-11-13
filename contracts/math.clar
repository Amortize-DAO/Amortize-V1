
;; math
;; <add a description here>

;; constants
;;

;; data maps and vars
(define-data-var term-length int 5)

(define-data-var price-BTC int 0)

(define-data-var value-home int 0)

(define-data-var curr-mortgage-balance int 0)

(define-data-var equity-mint int 0)

(define-data-var bitcoin-to-contract int 0)

(define-data-var amortize-rate int 0)

(define-data-var amortize-const int 0)

(define-data-var payment-per-year int 0)

(define-data-var rate-per-period int 0)

;; private functions
(define-private (multiply (x int) (y int))
    (* x y)
)

(define-private (divide (x int) (y int)) 
    (/ x y)
)

(define-private (add (x int) (y int)) 
    (+ x y)
)

(define-private (subtract (x int) (y int)) 
    (- x y)
)

(define-private (minting-equity) 
    (if (< ( / (- (var-get value-home) (var-get curr-mortgage-balance)) 2 ) (var-get price-BTC))
        (var-set equity-mint ( / (- (var-get value-home) (var-get curr-mortgage-balance)) 2 ))
        (var-set equity-mint (var-get price-BTC)) 
       
    )
    

)

(define-private (BTC-to-Contract)
    (var-set bitcoin-to-contract (/ (var-get equity-mint) (var-get price-BTC)))
)

(define-private (amortize-Rate)
    (begin
        (asserts! (or (is-eq (var-get term-length) 5) (is-eq (var-get term-length) 7) (is-eq (var-get term-length) 10)) false)
        (asserts! (and  (not (is-eq (var-get term-length) 5)) (is-eq (var-get term-length) 7) (is-eq (var-get term-length) 10)) (var-set amortize-rate 23))
        (asserts! (and  (not (is-eq (var-get term-length) 7)) (is-eq (var-get term-length) 10)) (var-set amortize-rate 18))
        (var-set amortize-rate 10)
    )    
)

(define-private (rate-per-Period)
    (var-set rate-per-period (* 100 (- (pow ( / (+ 1 (/ (var-get amortize-rate) 100) ) (var-get price-BTC) ) (/ (var-get price-BTC) (var-get payment-per-year))) 1)))
)

(define-private (amortize-constant)
    (var-set amortize-const (/ (* (var-get price-BTC) (var-get rate-per-period)) (- 1 (pow (+ 1 (var-get rate-per-period)) (* -1 (var-get payment-per-year))))))
)


;; public functions

