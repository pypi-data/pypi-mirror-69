(import [nose.tools [eq_  assert-equal assert-not-equal]])


(import  [hyclb.core [*]])
(require [hyclb.core [*]])

(import   [hyclb.cl4hy [*]])
(require  [hyclb.cl4hy [*]])

(defn assert-all-equal [&rest tests]
  (reduce (fn [x y] (assert-equal x y) y)
          tests)
  None)

;;(import  [hyclb.models [hyclvector hycllist]] )
(defn test-eval-str []
  
  ;;(setv clisp (Clisp))
  (eq_
    (clisp.eval_str "(+ 2 5)")
    7)
  (clisp.eval_str "(defmacro alpha (x y) `(beta ,x ,y)) ")
  
  (eq_
    (clisp.eval_str "(macroexpand '(alpha a b))")
    '(BETA A B)
    )
  ;; (eq_
  ;;   (cl_eval_hy_str "(cons 1 (list/cl 3 4))")
  ;;   '(1 3 4))
  
  )


(defn test-eval-qexpr []
  
  ;;(setv clisp (Clisp))
  (eq_
    (clisp.eval_qexpr '(+ 2 5))
    7)
  
  (clisp.eval_qexpr '(defmacro alpha (x y) `(beta ,x ,y)) )
  (assert-all-equal
    (clisp.eval_qexpr '(macroexpand '(alpha a b)))
    (clisp.eval_qexpr '(MACROEXPAND '(ALPHA A B)))
    (cl_eval_hy_qexpr '(MACROEXPAND '(ALPHA A B)))
    '(BETA A B)     )
  

  (cl_eval_hy_qexpr  '(defmacro alpha (x y) `(beta ,x ,y)) )
  (assert-all-equal
    (cl_eval_hy_qexpr '(macroexpand '(alpha a b)))
    (cl_eval_hy        (macroexpand '(alpha a b)))
    '(beta a b)     )
  
  (defmacro/cl alpha1 (x y) `(beta1 ,x ,y))
  (assert-all-equal
    (cl_eval_hy_qexpr '(macroexpand '(alpha1 a b)))
    (cl_eval_hy        (macroexpand '(alpha1 a b)))
    '(beta1 a b)  )

  (defmacro/cl ALPHA1 (x y) `(BETA1 ,x ,y))
  (assert-all-equal
    (cl_eval_hy_qexpr '(macroexpand '(ALPHA1 A B)))
    (cl_eval_hy        (macroexpand '(ALPHA1 A B)))
    (clisp.eval_qexpr '(macroexpand '(alpha1 a b)))
    '(BETA1 A B)  )

  
  (assert-all-equal
    (clisp.eval_qexpr '(ALEXANDRIA:DESTRUCTURING-CASE '(:X 0 1 2) ((:X X Y Z) (LIST X Y Z)) ((T &REST REST) :ELSE)) )
    (clisp.eval_qexpr '(alexandria:destructuring-case '(:x 0 1 2) ((:x x y z) (list x y z)) ((t &rest rest) :else)) )
    (cl_eval_hy_qexpr '(alexandria:destructuring-case '(:x 0 1 2) ((:x x y z) (list x y z)) ((t &rest rest) :else)) )
    '(0 1 2)     )

  (eq_
    (cl_eval_hy (do
                  (setv x 20)
                  (+ 1 x)))
    21)
  


  (assert-all-equal
    (cl_eval_hy (cons 123 (list/cl 12 3)))    
    (cl_eval_hy (cons 123 (list    12 3)))
    (cl_eval_hy (CONS 123 (LIST    12 3)))
    (cl_eval_hy (CONS 123 (list    12 3)))
    (cl_eval_hy (cons 123 (LIST    12 3)))        
    '(123 12 3)
    )


  (eq_
    (cl_eval_hy '(12 3))
    '(12 3))
  
  (eq_
    (hy-repr  
      (cl_eval_hy (vector/cl 1 2 3))
      )
    "#(1 2 3)"
    )
  
  (eq_
   (cl_eval_hy (vector/cl 1 2 3))
   [1 2 3])
  
  )



(defn test-defuncl []
  (defun testfn (x y)
    (setq y (+ 3 y))
    (+ x y))
  (eq_
    (testfn 12 35)
    50
    )

  (defun/global testfngl1 (x y)
    (setq y (+ 3 y))
    (+ x y))
  (eq_
    (testfngl1 12 35)
    50
    )

  (defun testcldbind ()
    (let ((l (list 1 2 3)))
      (destructuring-bind (x y z) l
        (+ x y z))))
  (eq_
    (testcldbind)
    6
    )
  
  )


(defn test-quicklisp []
  ;;(setv clisp (Clisp :quicklisp True))
  ;;(clisp.eval_qexpr  '(ql:quickload "alexandria"))
  
  (eq_
    (clisp.eval_str  "(alexandria:destructuring-case '(:x 0 1 2)   ((:x x y z) (list x y z))  ((t &rest rest) :else))")
    '(0 1 2)
    ;;[0 1 2]
    )
  )

(defn test-cl4hy-misc []
  (eq_
    (clisp.eval_qexpr '(list 1 2 3))
    '(1 2 3) )
  ;; (eq_
  ;;   (clisp.eval_qexpr '(vector 1 2 3))
  ;;   ;;'(vector 1 2 3)
  ;;   [1 2 3]
  ;;   )
  )


(defn test-anaphora []
  ;; (clisp.eval_qexpr '(ql:quickload "anaphora"))
  ;; (clisp.eval_qexpr '(rename-package 'anaphora 'ap) )

  (defun test_alet1 (x y)
     (setq y (+ 10 y))
     (ap:alet (+ x y)  (+ 1 ap:it)))
  (eq_
    (test_alet1 49 30)
    90)

  (import numpy)
  (defun test_alet2 (x y)
    (setq y (+ 10 y))
    (numpy.sin
      (* 
        (ap:alet (+ x y)  (+ 1 ap:it))
        (/ numpy.pi 180)))
    )

  (eq_ (test_alet2 49 30)
       1.0)

)

(defn test-optima []
  (defun testom1 []
    (om:match (list 1 2)
              ((list _) 1)
              ((list _ _) 2)
              ((list _ _ _) 3)
              ) )
  (eq_
    (testom1)
    2)

  (defun testom2 []
    (om:match 1 ((om:guard x (eql x 1)) t))
  )
  (eq_
    (testom2)
    True)

  (defun testom3 (x)
    (ome:let-match
      (((list x y z) x))
      (+ x y z)
      ))
  (eq_
    (testom3 '(1 2 3))
    6
    )

  (import numpy)
  (defun testom4 (u)
    (setq p numpy.pi)
    (om:match
      u
      (`(,x 5 ,z) (list x y z))
      (`(,x ,p ,z) (list x 2 z)))
    )
  
  (eq_
    (testom4
      (list/cl  1 numpy.pi  3)
      )
    '(1 2 3)
    )

  (defun testom5 (z)
    (om:match
      z
      ((assoc 1 x) x))
    )
  (eq_
    (testom5 { 1 "one"})
    "one")

  ;;(clisp.eval_qexpr `(defstruct numpy.ndarray  shape ndim))
  (cl_struct_import_obj (numpy.array [1 2 3 ]))
  
  (defun testom6 (z)
    ;;(cl_struct_import_obj z)
    (om:match
      z
      ((numpy.ndarray shape ndim ) (list shape ndim )))
    )
  (eq_
    (testom6 (numpy.array [1 2 3]))
    (list/cl (, 3) 1)
    )
  

  (defun testom7 (u)
    (ome:let-match
      (((list x y z) u))
      (numpy.array [x y z])
      ))
  (eq_
    True
    (all
      (= (testom7 '(1 2 3))
         (numpy.array [1 2 3]) )
      ))
  
  ;; (defun testtv1 []
  ;;   (tv:match (list 1 2)
  ;;             ((list _) 1)
  ;;             ((list _ _) 2)
  ;;             ((list _ _ _) 3)
  ;;             ) )
  ;; (eq_
  ;;   (testtv1)
  ;;   2)
  
  )



(defn test-optima2 []
  (defun clmywalk (lis)
    (om:match
      lis
      ((list 6 '(7 8) _) True)
      ((null _)   nil)
      ((list)     nil)
      ((cons a b)
        (or
          (clmywalk a)
          (clmywalk b)))))
  (eq_
    True
    (clmywalk '(1 2 3 4 (5 6 (7 8) 9) 0) )
    )
  
  )
