
;; math
;; <add a description here>

;; constants
;;

;; data maps and vars
(define-data-var term-length int 10)

(define-data-var price-BTC int 50000)

(define-data-var value-home int 500000)

(define-data-var curr-mortgage-balance int 200000)

(define-data-var equity-mint int 0)

(define-data-var bitcoin-to-contract int 0)

(define-data-var amortize-rate int 0)

(define-data-var amortize-const int 0)

(define-data-var payment-per-year int 1)

(define-data-var rate-per-period int 15)

;; private functions

(define-public (minting-equity) 
    (if (< ( / (- (var-get value-home) (var-get curr-mortgage-balance)) 2 ) (var-get price-BTC))
        (ok (var-set equity-mint ( / (- (var-get value-home) (var-get curr-mortgage-balance)) 2 )))
        (ok (var-set equity-mint (var-get price-BTC)))  
    )
)

(define-public (btc-to-contract)
    (ok (var-set bitcoin-to-contract ( / (var-get equity-mint) (var-get price-BTC))))
)

(define-public (amortize-Rate)
    (begin
        (asserts! (or (is-eq (var-get term-length) 5) (is-eq (var-get term-length) 7) (is-eq (var-get term-length) 10)) (err false))
        (asserts! (not (is-eq (var-get term-length) 5)) (ok (var-set amortize-rate 23)))
        (asserts! (not (is-eq (var-get term-length) 7)) (ok (var-set amortize-rate 18)))
        (ok (var-set amortize-rate 15))
    )    
)

;; Decimal Issues returning 0 due to division
(define-public (rate-per-Period)
    (ok (var-set rate-per-period ( * 100 (- (pow (+ 1 ( / ( / (var-get amortize-rate) 100) (var-get bitcoin-to-contract) )) ( / (var-get bitcoin-to-contract) (var-get payment-per-year))) 1))))
)

;; Decimal Issues returning 0 due to division, pow second argument cannot be < 0 problem
(define-public (amortize-constant)
    (ok (var-set amortize-const ( / (* (var-get bitcoin-to-contract) (var-get rate-per-period)) (- 1 ( pow (+ 1 (var-get rate-per-period)) (* -1 (var-get payment-per-year) (var-get term-length)))))))
)


;; public functions
(define-read-only (get-amortize-rate)
    (var-get amortize-rate)
)

(define-read-only (get-amortize-constant)
    (var-get amortize-rate)
)

(define-read-only (get-rate-per-Period)
    (var-get rate-per-period)
)

(define-read-only (get-btc-to-contract)
    (var-get bitcoin-to-contract)
)

(define-read-only (get-minting-equity)
    (var-get equity-mint)
)
